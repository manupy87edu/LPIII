
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `Eres un asistente virtual experto para la clase de "Lenguaje de Programación III" (HTML, CSS, JS). 
      Tu objetivo es ayudar a estudiantes universitarios y al docente.
      
      Reglas:
      1. Explica conceptos de desarrollo web de forma clara y con ejemplos de código.
      2. Si te preguntan sobre el programa, sabes que la unidad 1 es HTML, la 2 es CSS y la 3 es JS.
      3. Sé motivador y profesional.
      4. Usa formato Markdown para tus respuestas.`,
    },
  });
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [
            { text: prompt }
          ]
        },
        config: {
            imageConfig: {
                aspectRatio: "16:9",
                imageSize: "1K"
            }
        }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};

export const searchWeb = async (query: string): Promise<string> => {
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: query,
            config: {
                tools: [{ googleSearch: {} }]
            }
        });
        
        let text = response.text || "No se encontró información.";
        
        // Append sources if available
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        if (chunks && chunks.length > 0) {
            text += "\n\n**Fuentes:**\n";
            chunks.forEach((chunk: any) => {
                if (chunk.web?.uri) {
                    text += `- [${chunk.web.title}](${chunk.web.uri})\n`;
                }
            });
        }
        
        return text;
    } catch (error) {
        console.error("Error searching web:", error);
        return "Hubo un error al buscar información actualizada.";
    }
}
