FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
# CPU-only PyTorch: the CUDA build is several GB and this model never needs a GPU.
RUN pip install --no-cache-dir --index-url https://download.pytorch.org/whl/cpu torch==2.14.1 \
 && pip install --no-cache-dir -r requirements.txt
COPY backend backend
COPY models/*.py models/
COPY data/scripts/tokenizer.py data/scripts/
COPY runs/latest runs/latest
EXPOSE 8000
CMD ["uvicorn", "backend.api:app", "--host", "0.0.0.0", "--port", "8000"]
