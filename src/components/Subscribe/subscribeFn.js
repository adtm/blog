export default async (req) => {
  const { email } = req.body

  if (!email) {
    return { error: "Email is required" }
  }

  try {
    const API_KEY = "991c7d6a-72ca-4438-89df-dfc9f173dba9"
    const response = await fetch(
      `https://api.buttondown.email/v1/subscribers`,
      {
        body: JSON.stringify({
          email,
          tags: ["tomas.life"],
        }),
        headers: {
          Authorization: `Token ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    )

    if (response.status >= 400) {
      const text = await response.text()

      if (text.includes("already subscribed")) {
        return { error: `You're already subscribed to the mailing list.` }
      }

      return { error: text }
    }

    return { error: "" }
  } catch (error) {
    return { error: error.message || error.toString() }
  }
}
