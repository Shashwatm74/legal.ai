from flask import Flask, request, jsonify
import torch
from flask_cors import CORS
from transformers import AutoModelForCausalLM, AutoTokenizer

app = Flask(__name__)
cors = CORS(app, resources={r"/generate": {"origins": "http://localhost:3000"}})
torch.set_default_device('cpu')
model = AutoModelForCausalLM.from_pretrained("microsoft/phi-1_5", trust_remote_code=True)
tokenizer = AutoTokenizer.from_pretrained("microsoft/phi-1_5", trust_remote_code=True)

@app.route("/generate", methods=["POST"])
def index():
    if request.method == "POST":
        user_input = request.form["input_text"]
        inputs = tokenizer(user_input, return_tensors="pt")
        # Exclude 'attention_mask' from inputs
        inputs = {k: v for k, v in inputs.items() if k != 'attention_mask'}
        outputs = model.generate(**inputs, max_length=200)
        text = tokenizer.batch_decode(outputs)[0]
        return jsonify({'text': text})

if __name__ == "__main__":
    app.run(debug=True, port=5001)
