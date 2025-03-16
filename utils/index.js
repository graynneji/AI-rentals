export function getRandomLightColor() {
  const colors = [
    "#FFECB3", // Soft Butter Yellow
    "#FFF9C4", // Light Lemon
    "#FFF4E6", // Warm Cream
    "#FFE0B2", // Light Orange
    "#FFD180", // Peachy Yellow
    "#FFCC80", // Pastel Tangerine
    "#FFE4B5", // Soft Apricot
    "#FFDAB9", // Pastel Peach
    "#FFECB3", // Light Gold
    "#FDE68A", // Soft Mustard
    "#FFF3CD", // Soft Champagne
    "#FFEB99", // Pale Sunflower
    "#FAE5D3", // Soft Pastel Orange
    "#FFF5EE", // Vanilla Cream
    "#FAFAD2", // Lemon Chiffon
    "#FFFFE0", // Light Gold
    "#FFFDE7", // Very Light Yellow
    "#FAF0E6", // Linen
    "#FFF7D6", // Soft Beige
    "#FFEFD5", // Papaya Whip
    "#FFD1DC", // Light Cotton Candy
    "#FFB6C1", // Soft Pink
    "#FFC0CB", // Pastel Pink
    "#FFD3E0", // Soft Blush
    "#FFEBE9", // Very Light Rose
    "#FFE4E1", // Misty Rose
    "#FFF0F5", // Lavender Blush
    "#E6B8D7", // Pastel Orchid
    "#E6D6F2", // Light Lilac
    "#E0BBE4", // Soft Purple
    "#D8BFD8", // Thistle
    "#DDA0DD", // Pale Plum
    "#FAD2E1", // Peachy Pink
    "#E6E6FA", // Lavender
    "#E0FFFF", // Light Cyan
    "#D1FAE5", // Pastel Mint
    "#D1FADF", // Pale Jade
    "#C8E6C9", // Soft Green
    "#A8E6CF", // Mint Green
    "#99FF99", // Neon Pastel Green
    "#B9F6CA", // Light Mint
    "#B2FF59", // Soft Lime
    "#C5E1A5", // Light Leaf Green
    "#E6F9AF", // Yellowish Green
    "#E0FFB3", // Very Light Lime
    "#B0E57C", // Pastel Fern
    "#9FE2BF", // Light Aquamarine
    "#A7C7E7", // Sky Blue
    "#AFEEEE", // Pale Turquoise
    "#B3E5FC", // Soft Sky Blue
    "#ADD8E6", // Light Blue
    "#D0E1F9", // Cool Ice Blue
    "#D9F0FF", // Very Pale Blue
    "#DBE9FA", // Soft Baby Blue
    "#D4F1F4", // Pastel Cyan
    "#C2E0F7", // Gentle Blue
    "#E3F2FD", // Cloud Blue
    "#B2DFDB", // Soft Teal
    "#D4FCF9", // Light Aqua
    "#DBF0F3", // Ice Mint
    "#DCF8C6", // Soft Lime Green
    "#E3EAA7", // Pastel Yellow-Green
    "#E4FDE1", // Pale Spring Green
    "#ECF5DC", // Very Light Pastel Green
    "#E5FCC2", // Light Celery
    "#F1F7ED", // Whisper Green
    "#F8F8F8", // Off White
    "#F4F9F9", // Soft White Blue
    "#F5F5DC", // Beige
    "#FBF8EF", // Light Almond
    "#FCF8E8", // Soft Ivory
    "#F9F7C4", // Soft Yellow Glow
    "#FFFAF0", // Floral White
    "#FEF9E7", // Light Sand
    "#FFFFF0", // Ivory White
    "#FCF7DE", // Soft Banana Yellow
    "#FDF5E6", // Light Cream
    "#FFF0E1", // Pale Peach
    "#FAEBD7", // Antique White
    "#FFDEAD", // Soft Nectarine
    "#FFEBCD", // Soft Buttery Cream
    "#FFE4B5", // Pastel Apricot
    "#FFDBA4", // Soft Melon
    "#FFDAA5", // Warm Peach
    "#FFDAB9", // Light Coral Peach
    "#FAD6A5", // Pale Orange Cream
    "#FFD580", // Pastel Citrus
    "#FFF7EC", // Very Light Orange
    "#FFE4C4", // Soft Sand
    "#FFF5E1", // Whisper Peach
    "#FFFAE5", // Warm Vanilla
    "#FFFFF7", // Softest Ivory
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}
