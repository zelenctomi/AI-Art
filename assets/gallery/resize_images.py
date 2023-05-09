from PIL import Image
import sys

def resize_image(input_image_path, output_image_path, size):
    with Image.open(input_image_path) as image:
        image.thumbnail(size)
        image.save(output_image_path)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python resize_images.py <path_to_image>")
        sys.exit(1)

    input_image_path = sys.argv[1]
    image_name = input_image_path.split("/")[-1].split(".")[0]

    sizes = [(400, 400)]

    for index, size in enumerate(sizes):
        output_image_path = f"{image_name}_{size[0]}.png"
        resize_image(input_image_path, output_image_path, size)
        print(f"Image resized and saved as {output_image_path}")