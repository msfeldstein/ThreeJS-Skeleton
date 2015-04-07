module.exports = function(THREE) {
  require("./BloomPass.js")(THREE);
  require("./ConvolutionShader.js")(THREE);
  require("./CopyShader.js")(THREE);
  require("./MaskPass.js")(THREE);
  require("./RenderPass.js")(THREE);
  require("./ShaderPass.js")(THREE);
  require("./ZoomBlurPass.js")(THREE);
};
