// api/form.ts

import { openai } from "@ai-sdk/openai";
import { StreamingTextResponse, streamText, StreamData, CoreMessage } from "ai";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, age, weight, height, dietType, goalType } = req.body;

    // Construct input text for GPT-4 Turbo
    const inputText = `Name: ${name}\nAge: ${age}\nWeight: ${weight}\nHeight: ${height}\nDiet Type: ${dietType}\nGoal Type: ${goalType}\n`;

    // Create a message object with the correct structure
    const message: CoreMessage = {
      role: "user",
      content: inputText,
    };

    // Call GPT-4 Turbo API
    const result = await streamText({
      model: openai("gpt-4-turbo"),
      messages: [message],
    });

    // Prepare response
    const data = new StreamData();
    const stream = result.toAIStream({
      onFinal(_) {
        data.close();
      },
    });

    // Return response
    res.setHeader("Content-Type", "application/json");
    return new StreamingTextResponse(stream, {}, data);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
