from PIL import Image
import os

# Replace 'path_to_your_input_folder' with the path to your folder containing images
input_folder = 'pics'

# Replace 'path_to_your_output_folder' with the path to your output folder
output_folder = 'jpg_pics'

# Create the output folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Loop through all files in the input folder
for filename in os.listdir(input_folder):
    file_path = os.path.join(input_folder, filename)

    # Check if the file is an image (you can add more image formats as needed)
    if filename.lower().endswith(('.PNG')):
        # Open the image file
        with Image.open(file_path) as img:
            # Convert the image to JPEG format and save it in the output folder
            new_filename = os.path.join(
                output_folder, os.path.splitext(filename)[0] + '.jpg')
            img.convert('RGB').save(new_filename, 'JPEG')
            print(f"Converted {filename} to {new_filename}")
