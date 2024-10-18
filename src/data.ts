import type { ImageItem } from "./types/ImageItem"

export const examples: ImageItem[] = [
  {
    name: "Ellen Pompeo",
    original: "https://res.cloudinary.com/josenromero/image/upload/f_auto/q_auto/v1/terror-makeup-generator-images/ef7gjxexyw3norxzoi1n?_a=BBGABlZE0",
    modified: "https://res.cloudinary.com/josenromero/image/upload/e_extract:prompt_face/e_gen_background_replace:prompt_a%20darkness%20witch/e_grayscale/f_auto/q_auto/v1/terror-makeup-generator-images/ef7gjxexyw3norxzoi1n?_a=BBGABlZE0",
    option: "witch",
    prompt: ""
  },
  {
    name: "Michael C. Hall",
    original: "https://res.cloudinary.com/josenromero/image/upload/f_auto/q_auto/v1/terror-makeup-generator-images/jz7y0kaik9xycealpein?_a=BBGABlZE0",
    modified: "https://res.cloudinary.com/josenromero/image/upload/e_extract:prompt_face/e_gen_background_replace:prompt_a%20man%20with%20many%20tattoos/e_grayscale/f_auto/q_auto/v1/terror-makeup-generator-images/jz7y0kaik9xycealpein?_a=BBGABlZE0",
    option: "custom option",
    prompt: "a man with many tattoos"
  },
  {
    name: "Linus Torvalds",
    original: "https://res.cloudinary.com/josenromero/image/upload/f_auto/q_auto/v1/terror-makeup-generator-images/kgsinbyvgxo0f6wcnz7w?_a=BBGABlZE0",
    modified: "https://res.cloudinary.com/josenromero/image/upload/e_extract:prompt_face/e_gen_background_replace:prompt_a%20darkness%20freddy%20krueger/e_grayscale/f_auto/q_auto/v1/terror-makeup-generator-images/kgsinbyvgxo0f6wcnz7w?_a=BBGABlZE0",
    option: "custom option",
    prompt: "a darkness freddy krueger"
  }
]