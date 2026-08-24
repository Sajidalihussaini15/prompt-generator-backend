const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/generate-prompt', (req, res) => {
    // Frontend se ab zyada details aayengi
    const { topic, style, lighting, camera, ratio } = req.body;
    
    let styleDetails = "";
    
    switch(style) {
        case "Cinematic":
            styleDetails = "highly detailed, 8k resolution, photorealistic, cinematic composition, shot on RED Komodo, ARRI Alexa style, unreal engine 5 render quality";
            break;
        case "Macro":
            styleDetails = "extreme macro photography, extreme close-up, highly detailed textures, beautiful bokeh, hyper-realistic, shot on 100mm macro lens, f/2.8";
            break;
        case "DarkMoody":
            styleDetails = "dark and moody atmosphere, high contrast, shadows and highlights, cinematic low key lighting, mysterious vibe, desaturated colors";
            break;
        case "ProductBroll":
            styleDetails = "professional product b-roll shot, commercial quality, ultra sharp focus, clean background, slow motion panning, studio quality";
            break;
        case "Cyberpunk":
            styleDetails = "cyberpunk aesthetic, neon glowing lights, futuristic city vibes, rain reflections, highly atmospheric, blade runner style";
            break;
        case "Vintage":
            styleDetails = "vintage film look, 35mm film photography, subtle film grain, slightly faded colors, nostalgic atmosphere, halation effect";
            break;
        default:
            styleDetails = "high quality, well detailed";
    }

    // Ab hum un sab cheezon ko mila kar ek zabardast prompt banayenge
    const finalPrompt = `A ${styleDetails} video of ${topic}. Lighting: ${lighting}. Camera: ${camera}. Aspect Ratio: --ar ${ratio}`;

    res.json({ prompt: finalPrompt });
});

app.listen(PORT, () => {
    console.log(`Advanced Backend server port ${PORT} par chal raha hai.`);
});