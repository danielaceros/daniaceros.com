// hls.js no publica tipos para su entrada "hls.js/light" (package.json exports sin "types"):
// la API es la misma que la del build completo, sin subtítulos/audio alternativo/EME.
declare module "hls.js/light" {
  import Hls from "hls.js"
  export default Hls
}
