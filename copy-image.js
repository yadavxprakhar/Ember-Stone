import fs from 'fs';
import path from 'path';

const src = '/Users/prakhar/.gemini/antigravity-ide/brain/45109ee1-019e-4b3a-be4c-de53370e4b9c/chef_cooking_fire_1780344130533.png';
const dest = '/Users/prakhar/Projects/Amber & Stone /public/images/chef.png';

try {
  // Ensure destination directory exists
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.copyFileSync(src, dest);
  console.log('Successfully copied chef image!');
} catch (err) {
  console.error('Error copying chef image:', err.message);
}
