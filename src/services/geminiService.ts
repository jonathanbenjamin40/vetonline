import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function checkSymptoms(petInfo: string, symptoms: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `As a veterinary assistant AI, analyze the following pet symptoms. 
    Pet Info: ${petInfo}
    Symptoms: ${symptoms}
    
    Provide a structured assessment including severity, advice, possible causes, and recommended actions.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          severity: {
            type: Type.STRING,
            enum: ["low", "medium", "high", "emergency"],
            description: "The urgency of the situation."
          },
          advice: {
            type: Type.STRING,
            description: "General advice for the pet owner."
          },
          possibleCauses: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of potential issues."
          },
          recommendedActions: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Steps the owner should take next."
          }
        },
        required: ["severity", "advice", "possibleCauses", "recommendedActions"]
      }
    }
  });

  return JSON.parse(response.text);
}
