from flask import Flask, request, jsonify
from transformers import BartForConditionalGeneration, BartTokenizer
# import torch

app = Flask(__name__)
model_path = "facebook/bart-large-cnn"  
model = BartForConditionalGeneration.from_pretrained(model_path)
tokenizer = BartTokenizer.from_pretrained(model_path)

@app.route("/summarize", methods=['POST'])
def index():
    if request.method == "POST":
        input_text = request.form["input_text"]
        input_ids = tokenizer.encode(input_text, return_tensors="pt", max_length=1024, truncation=True)
        summary_ids = model.generate(input_ids, max_length=150, min_length=100, length_penalty=2.0, num_beams=4, early_stopping=True)
        summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
        return jsonify({'Summary': summary})

if __name__ == "__main__":
    app.run(debug=True)
