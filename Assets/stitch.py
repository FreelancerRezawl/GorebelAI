import os
from PIL import Image, ImageDraw, ImageFont

def create_contact_sheet(directory, output_file, thumbsize=(200, 200), cols=10):
    files = [f for f in os.listdir(directory) if f.endswith('.png')]
    files.sort(key=lambda x: int(''.join(filter(str.isdigit, x))) if any(c.isdigit() for c in x) else 0)
    
    rows = (len(files) + cols - 1) // cols
    width = cols * thumbsize[0]
    height = rows * thumbsize[1]
    
    sheet = Image.new('RGB', (width, height), 'white')
    draw = ImageDraw.Draw(sheet)
    
    for i, file in enumerate(files):
        img_path = os.path.join(directory, file)
        try:
            img = Image.open(img_path).convert('RGB')
            img.thumbnail((thumbsize[0], thumbsize[1] - 30))
            
            x = (i % cols) * thumbsize[0]
            y = (i // cols) * thumbsize[1]
            
            img_x = x + (thumbsize[0] - img.width) // 2
            img_y = y + (thumbsize[1] - 30 - img.height) // 2
            
            sheet.paste(img, (img_x, img_y))
            draw.text((x + 10, y + thumbsize[1] - 25), file, fill='black')
        except Exception as e:
            print(f"Failed to process {file}: {e}")
            
    sheet.save(output_file)

create_contact_sheet('/Users/mdrezawl/Desktop/Gorebel/Assets/1x', '/Users/mdrezawl/Desktop/Gorebel/Assets/contact_sheet.jpg')
