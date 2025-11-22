  const API = {
  async listChallenges() {
    const r = await fetch("/api/challenges");
    return r.json();
  },

  async getChallenge(id) {
    const r = await fetch("/api/challenges/" + id);
    return r.json();
  },

  async runCode(code, args) {
    const r = await fetch("/api/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, args })
    });
    return r.json();
  },

  async explain(code, error, expected) {
    const r = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, error, expected })
    });
    return r.json();
  }
};
