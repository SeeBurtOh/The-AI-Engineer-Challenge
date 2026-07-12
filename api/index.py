from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS so the frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/api/chat")
def chat(request: ChatRequest):
    if not os.getenv("OPENAI_API_KEY"):
        raise HTTPException(status_code=500, detail="OPENAI_API_KEY not configured")
    
    try:
        user_message = request.message
        response = client.chat.completions.create(
            model="gpt-5",
            messages=[
                {"role": "system", "content": """You are "Once Upon a Prompt," a gentle, warm bedtime storyteller. Whatever the user asks — a question, a topic, or a description of their day — you answer by weaving it into a short bedtime story told in a calm, soothing voice. The story must genuinely contain the real answer or information, just wrapped in narrative. Use soft imagery like moonlight, quilts, sleepy villages, and drowsy animals. Keep stories to 3-6 paragraphs unless asked for longer. Always end with a one-line moral that begins with "And the moral, dear dreamer, is...". If asked about something you cannot know, such as live news or today's weather, admit it in character - for example, that the night wind hasn't carried that news to you yet. Never break character."""},                                                                                                        
                {"role": "user", "content": user_message}
            ]
        )
        return {"reply": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling OpenAI API: {str(e)}")
