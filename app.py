# import numpy as np
# from flask import Flask,request

import easyocr

# Define the OCR model (you can choose different languages and GPU acceleration)
reader = easyocr.Reader(['en'], gpu = False)

# Load an image for OCR
image_path = 'example_image.jpg'

# Perform OCR on the image
result = reader.readtext(image_path)

# Print the OCR results
for detection in result:
    print(detection[1])  # Detected text
