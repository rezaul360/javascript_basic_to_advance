var width = 50;

var rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("My Width Is " + this.width);
    console.log("My Height Is " + this.height);
  },
};
rect.draw();
rect.height = 100;
rect.draw();
