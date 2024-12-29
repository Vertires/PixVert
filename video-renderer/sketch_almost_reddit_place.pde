// import the library
import com.hamoid.*;

// create a new VideoExport-object
VideoExport videoExport;


float angle;
float jitter;

int pixelSize = 3;

JSONArray json;

int currentPixelIndex = 0;

void renderPixel(int pixelIndex) {
  if(pixelIndex >= json.size() - 1) {
    return;
  }
  
  JSONObject pixel = json.getJSONObject(pixelIndex);
  
  int x = pixel.getInt("x");
  int y = pixel.getInt("y");
  String hex = pixel.getString("hex");
  
  int c = Integer.parseInt(hex, 16);
  c = color(red(c), green(c), blue(c));
  
  fill(c);
  rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);  
}

void setup() {
  size(1500, 1500);
  noStroke();
  background(255,255,255);
  json = loadJSONArray("pixels.json");
  
  videoExport = new VideoExport(this, "output.mp4");
  videoExport.setFrameRate(30);  
  videoExport.startMovie();

}




void draw() {
  if(currentPixelIndex >= json.size() - 1) {
    videoExport.endMovie();
    exit();
  }
  
  for(int i = 0; i < 100; i++) {
   renderPixel(currentPixelIndex + i);
  }
  
  currentPixelIndex += 100;
  
  videoExport.saveFrame();
}
