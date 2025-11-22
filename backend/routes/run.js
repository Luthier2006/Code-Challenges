import express from "express";
import Docker from "dockerode";
import fs from "fs";

const router = express.Router();
const docker = new Docker();

router.post("/", async (req, res) => {
  const { code, args } = req.body;

  fs.writeFileSync("backend/sandbox/code.js", code);

  try {
    const container = await docker.createContainer({
      Image: "node:18",
      Cmd: ["node", "/code/code.js", ...args.map(String)],
      HostConfig: {
        Binds: [`${process.cwd()}/backend/sandbox:/code`]
      }
    });

    await container.start();
    const stream = await container.attach({ stream: true, stdout: true, stderr: true });

    let output = "";
    stream.on("data", data => (output += data.toString()));

    const exit = await container.wait();
    await container.remove();

    res.json({ output, error: exit.StatusCode !== 0 });
  } catch (e) {
    res.json({ error: true, output: e.toString() });
  }
});

export default router;
