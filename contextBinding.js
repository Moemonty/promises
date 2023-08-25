// var Ball = function( x, y, vx, vy ) {
//   this.x = x;
//   this.y = y;
//   this.vx = vx;
//   this.vy = vy;
//   this.dt = 25; // 1000/25 = 40 frames per second
//   setInterval( function() {
//     this.x += vx;
//     this.y += vy;
//     console.log( this.x, this.y );
//   }, this.dt );
// }

// var ball = new Ball( 0, 0, 10000, 10000 ); // fails


// BIND this to self
// var Ball = function( x, y, vx, vy ) {
//   this.x = x;
//   this.y = y;
//   this.vx = vx;
//   this.vy = vy;
//   this.dt = 25; // 1000/25 = 40 frames per second
//   var self = this;
//   setInterval( function() {
//     self.x += vx;
//     self.y += vy;
//     console.log( self.x, self.y );
//   }, self.dt );
//
// }

// or: bind(this) to function scope

// var Ball = function( x, y, vx, vy ) {
//   this.x = x;
//   this.y = y;
//   this.vx = vx;
//   this.vy = vy;
//   this.dt = 25; // 1000/25 = 40 frames per second
//   setInterval( function() {
//     this.x += vx;
//     this.y += vy;
//     console.log( this.x, this.y );
//   }.bind(this), this.dt );
// }


// LET has automatic function binding.

var Ball = function( x, y, vx, vy ) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.dt = 25; // 1000/25 = 40 frames per second
  setInterval( () => {
    this.x += vx;
    this.y += vy;
    console.log( this.x, this.y );
  }, this.dt );
}

var ball = new Ball( 0, 0, 10000, 10000 ); // fails
// var ball = new Ball( 0, 0, 1, 1 );



