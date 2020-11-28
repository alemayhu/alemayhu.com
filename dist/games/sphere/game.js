/*  Laser Coin Planets
    Copyright (C) 2012  Morten Hustveit,
                        Alexander Alemayhu


    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.  */

/***********************************************************************/

var PLAYER_sprite;
var PLAYER_y;
var PLAYER_x;
var PLAYER_radius;
var PLAYER_speed = 16;

var DRAW_vertices = new Array ();
var DRAW_textureCoords = new Array ();
var DRAW_currentTexture;
var DRAW_camera;
var DRAW_alpha = 1.0;
var DRAW_blendMode = 0;

var TEXTURE_enemy = new Array();
var TEXTURE_energy;
var TEXTURE_lose;

var healthStats;

function DRAW_SetupShaders ()
{
  var fragmentShader = DRAW_GetShaderFromElement ("shader-fs");
  var vertexShader = DRAW_GetShaderFromElement ("shader-vs");

  shaderProgram = gl.createProgram ();
  gl.attachShader (shaderProgram, vertexShader);
  gl.attachShader (shaderProgram, fragmentShader);
  gl.linkProgram (shaderProgram);

  if (!gl.getProgramParameter (shaderProgram, gl.LINK_STATUS))
  {
    alert ("Could not initialise shaders");

    return;
  }

  gl.useProgram (shaderProgram);

  shaderProgram.vertexPositionAttribute = gl.getAttribLocation (shaderProgram, "attr_VertexPosition");
  gl.enableVertexAttribArray (shaderProgram.vertexPositionAttribute);

  shaderProgram.textureCoordAttribute = gl.getAttribLocation (shaderProgram, "attr_TextureCoord");
  gl.enableVertexAttribArray (shaderProgram.textureCoordAttribute);

  gl.uniform1i (gl.getUniformLocation (shaderProgram, "uniform_Sampler"), 0);
}

function DRAW_SetBlendMode (mode)
{
  if (mode == DRAW_blendMode)
    return;

  DRAW_Flush ();

  DRAW_blendMode = mode;
}

function DRAW_GetShaderFromElement (id)
{
  var shader, shaderScript;
  var str = "", k;

  shaderScript = document.getElementById (id);

  if (!shaderScript)
    return null;

  k = shaderScript.firstChild;

  while (k)
  {
    if (k.nodeType == 3)
      str += k.textContent;

    k = k.nextSibling;
  }

  if (shaderScript.type == "x-shader/x-fragment")
    shader = gl.createShader (gl.FRAGMENT_SHADER);
  else if (shaderScript.type == "x-shader/x-vertex")
    shader = gl.createShader (gl.VERTEX_SHADER);
  else
    return null;

  gl.shaderSource (shader, str);
  gl.compileShader (shader);

  if (!gl.getShaderParameter (shader, gl.COMPILE_STATUS))
  {
    alert (gl.getShaderInfoLog (shader));

    return null;
  }

  return shader;
}

function DRAW_LoadTexture (url)
{
  var result;

  result = gl.createTexture ();
  result.image = new Image ();
  result.image.onload = function () { DRAW_HandleLoadedTexture (result) };
  result.image.src = url;

  return result;
}

function DRAW_HandleLoadedTexture (texture)
{
  gl.bindTexture (gl.TEXTURE_2D, texture);
  gl.pixelStorei (gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D (gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
  gl.texParameteri (gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri (gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  /*
     gl.texParameteri (gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
     gl.texParameteri (gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
   */
}

function DRAW_Flush ()
{
  var vertexCount;
  var vertexPositionBuffer;
  var texCoordBuffer;

  vertexCount = DRAW_vertices.length / 3;

  if (!vertexCount)
    return;

  gl.bindTexture (gl.TEXTURE_2D, DRAW_currentTexture);

  switch (DRAW_blendMode)
  {
  case 0: gl.blendFunc (gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); break;
  case 1: gl.blendFunc (gl.SRC_ALPHA, gl.ONE); break;
  }

  vertexPositionBuffer = gl.createBuffer ();
  gl.bindBuffer (gl.ARRAY_BUFFER, vertexPositionBuffer);
  gl.bufferData (gl.ARRAY_BUFFER, new Float32Array (DRAW_vertices), gl.STATIC_DRAW);

  texCoordBuffer = gl.createBuffer ();
  gl.bindBuffer (gl.ARRAY_BUFFER, texCoordBuffer);
  gl.bufferData (gl.ARRAY_BUFFER, new Float32Array (DRAW_textureCoords), gl.STATIC_DRAW);

  gl.bindBuffer (gl.ARRAY_BUFFER, texCoordBuffer);
  gl.vertexAttribPointer (shaderProgram.textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);

  gl.bindBuffer (gl.ARRAY_BUFFER, vertexPositionBuffer);
  gl.vertexAttribPointer (shaderProgram.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

  gl.drawArrays (gl.TRIANGLES, 0, vertexCount);

  DRAW_vertices.length = 0;
  DRAW_textureCoords.length = 0;

  gl.deleteBuffer (texCoordBuffer);
  gl.deleteBuffer (vertexPositionBuffer);
}

function DRAW_SetAlpha (alpha)
{
  DRAW_alpha = alpha;
}

function DRAW_AddQuad (texture, x, y, width, height)
{
  if (texture != DRAW_currentTexture)
    DRAW_Flush ();

  DRAW_currentTexture = texture;

  DRAW_vertices.push (x);
  DRAW_vertices.push (y);
  DRAW_vertices.push (DRAW_alpha);

  DRAW_vertices.push (x);
  DRAW_vertices.push (y + height);
  DRAW_vertices.push (DRAW_alpha);

  DRAW_vertices.push (x + width);
  DRAW_vertices.push (y + height);
  DRAW_vertices.push (DRAW_alpha);

  DRAW_vertices.push (x);
  DRAW_vertices.push (y);
  DRAW_vertices.push (DRAW_alpha);

  DRAW_vertices.push (x + width);
  DRAW_vertices.push (y + height);
  DRAW_vertices.push (DRAW_alpha);

  DRAW_vertices.push (x + width);
  DRAW_vertices.push (y);
  DRAW_vertices.push (DRAW_alpha);

  DRAW_textureCoords.push (0.0);
  DRAW_textureCoords.push (1.0);

  DRAW_textureCoords.push (0.0);
  DRAW_textureCoords.push (0.0);

  DRAW_textureCoords.push (1.0);
  DRAW_textureCoords.push (0.0);

  DRAW_textureCoords.push (0.0);
  DRAW_textureCoords.push (1.0);

  DRAW_textureCoords.push (1.0);
  DRAW_textureCoords.push (0.0);

  DRAW_textureCoords.push (1.0);
  DRAW_textureCoords.push (1.0);
}

function DRAW_AddQuadST (texture, x, y, width, height, s0, t0, s1, t1)
{
  if (texture != DRAW_currentTexture)
    DRAW_Flush ();

  DRAW_currentTexture = texture;

  DRAW_vertices.push (x);
  DRAW_vertices.push (y);
  DRAW_vertices.push (DRAW_alpha);

  DRAW_vertices.push (x);
  DRAW_vertices.push (y + height);
  DRAW_vertices.push (DRAW_alpha);

  DRAW_vertices.push (x + width);
  DRAW_vertices.push (y + height);
  DRAW_vertices.push (DRAW_alpha);

  DRAW_vertices.push (x);
  DRAW_vertices.push (y);
  DRAW_vertices.push (DRAW_alpha);

  DRAW_vertices.push (x + width);
  DRAW_vertices.push (y + height);
  DRAW_vertices.push (DRAW_alpha);

  DRAW_vertices.push (x + width);
  DRAW_vertices.push (y);
  DRAW_vertices.push (DRAW_alpha);

  DRAW_textureCoords.push (s0);
  DRAW_textureCoords.push (t0);

  DRAW_textureCoords.push (s0);
  DRAW_textureCoords.push (t1);

  DRAW_textureCoords.push (s1);
  DRAW_textureCoords.push (t1);

  DRAW_textureCoords.push (s0);
  DRAW_textureCoords.push (t0);

  DRAW_textureCoords.push (s1);
  DRAW_textureCoords.push (t1);

  DRAW_textureCoords.push (s1);
  DRAW_textureCoords.push (t0);
}

function DRAW_AddCircle (texture, x, y, radius)
{
  var i, s0, c0;

  if (texture != DRAW_currentTexture)
    DRAW_Flush ();

  DRAW_currentTexture = texture;

  s0 = 0.0;
  c0 = 1.0;

  for (i = 0; i < 200; ++i)
  {
    var s1, c1;

    if (i < 199)
    {
      s1 = Math.sin((i + 1) * Math.PI / 100.0);
      c1 = Math.cos((i + 1) * Math.PI / 100.0);
    }
    else
    {
      s1 = 0.0;
      c1 = 1.0;
    }

    DRAW_vertices.push (s0 * radius + x);
    DRAW_vertices.push (c0 * radius + y);
    DRAW_vertices.push (DRAW_alpha);

    DRAW_vertices.push (s1 * radius + x);
    DRAW_vertices.push (c1 * radius + y);
    DRAW_vertices.push (DRAW_alpha);

    DRAW_vertices.push (x);
    DRAW_vertices.push (y);
    DRAW_vertices.push (DRAW_alpha);

    DRAW_textureCoords.push (0.5 + 0.5 * s0);
    DRAW_textureCoords.push (0.5 - 0.5 * c0);

    DRAW_textureCoords.push (0.5 + 0.5 * s1);
    DRAW_textureCoords.push (0.5 - 0.5 * c1);

    DRAW_textureCoords.push (0.5);
    DRAW_textureCoords.push (0.5);

    s0 = s1;
    c0 = c1;
  }
}

/***********************************************************************/

var SYS_keys = {};
var lastTime = 0;

function SYS_Init ()
{
  var canvas = document.getElementById ("game-canvas");

  if (!(gl = WebGLUtils.setupWebGL (canvas)))
    return;

  document.onkeydown = function (event) { GAME_KeyPressed (event); };
  document.onkeyup = function (event) { GAME_KeyRelease (event); };
  canvas.onselectstart = function () { return false; }

  gl.viewportWidth = canvas.width;
  gl.viewportHeight = canvas.height;

  gl.viewport (0, 0, gl.viewportWidth, gl.viewportHeight);

  DRAW_SetupShaders ();

  gl.clearColor (0.0, 0.0, 0.0, 0.0);
  gl.disable (gl.DEPTH_TEST);

  gl.enable (gl.BLEND);
  gl.disable (gl.CULL_FACE);
}

/***********************************************************************/

var elapsed = 0;
var GAME_lose = false;
var GAME_enemies = new Array();
var GAME_energy = new Array();

function GAME_SetupTextures ()
{
  PLAYER_sprite = DRAW_LoadTexture("gfx/sphere.png");
  TEXTURE_enemy.push(DRAW_LoadTexture("gfx/enem1.png"));
  TEXTURE_enemy.push(DRAW_LoadTexture("gfx/enem2.png"));
  TEXTURE_energy = DRAW_LoadTexture("gfx/energy-sphere.png");
  TEXTURE_lose = DRAW_LoadTexture("gfx/lost.png");
}

function GAME_Setup ()
{
  PLAYER_x = 100;
  PLAYER_y = -232;
  PLAYER_radius = 20;

  for (var i = 0; i < 10; i++) 
    GAME_NewEnergy();

  for (var i = 0; i < 3; i++) 
    GAME_NewEnemy((i < 1 ? 0.5 : i));
}

function GAME_NewEnemy(timedelta)
{
  var enemy;
  enemy = new Object();
  enemy.x = Math.sin(Math.random() * 100) * (Math.random() * -800);
  enemy.y = -(Math.random() * 300);
  enemy.radius = Math.random() * 30;
  if (enemy.radius < 20) enemy.radius += 5;
  enemy.sprite = TEXTURE_enemy[Math.floor(Math.random() * 2)];

  for (var i = 0; i < GAME_enemies.length; i++) {
    var enemy2 = GAME_enemies[i];
    if (doesCircleIntersect(enemy.x, enemy.y, enemy.radius, enemy2.x, enemy2.y, enemy2.radius))
      return ;
  }

  GAME_enemies.push(enemy);
}

function GAME_NewEnergy()
{
  var energy;
  energy = new Object();
  energy.x = Math.sin(Math.random() * 100) * (Math.random() * -800);
  energy.y = -(Math.random() * 300);
  energy.radius = Math.random() * 10;
  energy.sprite = TEXTURE_energy;

  GAME_energy.push(energy);
}

function doesCircleIntersect(c1x, c1y, c1r, c2x, c2y, c2r) {
  var ab = c1x - c2x;
  var bc = c1y - c2y;
  var ac = ((ab*ab) + (bc*bc));
  return ac < Math.pow(c1r + c2r, 2);
}

function GAME_HandleCollision(deltaTime)
{
  for (var i = 0; i < GAME_enemies.length; i++) {
    var enemy = GAME_enemies[i];

    if (doesCircleIntersect(enemy.x, enemy.y, enemy.radius, PLAYER_x,
          PLAYER_y, PLAYER_radius)) {
            var rad = enemy.radius > PLAYER_radius ? -1.5 : -0.5;
            PLAYER_radius += rad;
          }
  }

  for (var i = 0; i < GAME_energy.length; i++) {

    if (PLAYER_radius >= 60)
      return ;

    var energy = GAME_energy[i];
    var ab = energy.x - PLAYER_x;
    var bc = energy.y - PLAYER_y;
    var ac = ((ab*ab) + (bc*bc));

    if (doesCircleIntersect(energy.x, energy.y, energy.radius,
          PLAYER_x, PLAYER_y, PLAYER_radius)) {
            PLAYER_radius += 0.5;
            energy.radius -= 0.5;
          }
  }

}

function GAME_Move (deltaTime)
{
  /*
  //Left key
  if (SYS_keys['%'])
  {
  PLAYER_x -= PLAYER_speed * deltaTime * 6.0;
  }//Right key
  else if (SYS_keys['\''])
  {
  PLAYER_x += PLAYER_speed * deltaTime * 6.0;
  }
   */
  if (SYS_keys['&'] && PLAYER_y > -290)
  {
    PLAYER_y -= PLAYER_speed * deltaTime * 6.0;
  } else if (SYS_keys['('] && (PLAYER_y <= -29 || PLAYER_y <= -320)) {
    PLAYER_y += PLAYER_speed * deltaTime * 6.0;
  }

  for (var i = 0; i < GAME_enemies.length; i++) {
    var enemy = GAME_enemies[i];
    enemy.x -= Math.cos(PLAYER_speed * deltaTime) * 3.0;
  }

  for (var i = 0; i < GAME_energy.length; i++) {
    var energy = GAME_energy[i];
    energy.x -= Math.cos((PLAYER_speed / 2) * deltaTime) * 6.0;
  }

  GAME_CameraUpdate (deltaTime);
  elapsed += deltaTime;
}



/* Move camera towards target, constrained by maximum acceleration and velocity */
function GAME_CameraUpdate (deltaTime)
{
  var target;

  target = new Object;
  target.x = PLAYER_x - gl.viewportWidth * 0.5;
  target.y = PLAYER_y - gl.viewportHeight * 0.5;

  GAME_Cruise (DRAW_camera, target, 2048.0, 2048.0, deltaTime);
}

function GAME_Cruise (position, target, maxAcceleration, maxVelocity, deltaTime)
{
  var distance;
  var dirX, dirY;
  var velocity;
  var targetVelocityX, targetVelocityY, targetVelocity;
  var deltaVelocityX, deltaVelocityY, deltaVelocity;

  dirX = target.x - position.x;
  dirY = target.y - position.y;
  distance = Math.sqrt (dirX * dirX + dirY * dirY);

  if (distance)
  {
    dirX /= distance;
    dirY /= distance;
  }

  targetVelocity = Math.sqrt (distance / maxAcceleration) * maxAcceleration;

  if (targetVelocity > maxVelocity)
    targetVelocity = maxVelocity;

  if (targetVelocity * deltaTime > distance)
    targetVelocity = distance / deltaTime;

  velocity = Math.sqrt (position.velX * position.velX + position.velY * position.velY);

  targetVelocityX = dirX * targetVelocity;
  targetVelocityY = dirY * targetVelocity;

  deltaVelocityX = targetVelocityX - position.velX;
  deltaVelocityY = targetVelocityY - position.velY;

  deltaVelocity = Math.sqrt (deltaVelocityX * deltaVelocityX + deltaVelocityY * deltaVelocityY);

  /* Can we reach the target velocity in less than `deltaTime' seconds? */
  if (deltaVelocity < maxAcceleration * deltaTime)
  {
    position.velX = targetVelocityX;
    position.velY = targetVelocityY;
  }
  else
  {
    /* Apply maximum acceleration in the direction of the target/current velocity delta */
    position.velX += (deltaVelocityX / deltaVelocity) * maxAcceleration * deltaTime;
    position.velY += (deltaVelocityY / deltaVelocity) * maxAcceleration * deltaTime;
  }

  position.x += position.velX * deltaTime;
  position.y += position.velY * deltaTime;
}

function GAME_Reset ()
{
  elapsed = 0;

  DRAW_camera = new Object;
  DRAW_camera.x = -400.0;
  DRAW_camera.y = -300.0;
  DRAW_camera.velX = 0;
  DRAW_camera.velY = 0;

  GAME_enemies = [];
  GAME_energy = [];
  GAME_lose = false;

  GAME_Setup();
}

function GAME_Init ()
{
  SYS_Init ();

  healthStats = document.getElementById ('radius');
  GAME_SetupTextures ();
  GAME_Setup();
  GAME_Reset ();
  GAME_Update ();
}

function GAME_KeyPressed(e)
{
  var ch;
  ch = String.fromCharCode (e.keyCode);

  if (SYS_keys[ch])
    return;

  //console.log("key pressed: " + ch);

  SYS_keys[ch] = true;

  switch (String.fromCharCode (e.keyCode))
  {
    //Space key
  case ' ':
    break;
  case 'r': case 'R':
    GAME_Reset();
    break;
  }
}

function GAME_KeyRelease (e)
{
  SYS_keys[String.fromCharCode (e.keyCode)] = false;
}

function GAME_Draw (deltaTime)
{
  gl.uniform4f (gl.getUniformLocation (shaderProgram, "uniform_Camera"), 1.0 / gl.viewportWidth, 1.0 / gl.viewportHeight, DRAW_camera.x, DRAW_camera.y);

  DRAW_SetAlpha (1.0);

  DRAW_SetBlendMode (1);
  DRAW_SetAlpha (1.0);

  if (GAME_lose == false) {

    DRAW_AddCircle(PLAYER_sprite, PLAYER_x, PLAYER_y, PLAYER_radius);

    for (var i = 0; i < GAME_enemies.length; i++) {
      var enemy = GAME_enemies[i];

      if (enemy.x > (-400) - enemy.radius)
        DRAW_AddCircle(enemy.sprite, enemy.x, enemy.y, enemy.radius);
      else {
        GAME_enemies.splice(i, 1);
        i--;
      }
    }

    for (var i = 0; i < GAME_energy.length; i++) {
      var energy = GAME_energy[i];

      if (energy.x > (-400) - energy.radius)
        DRAW_AddCircle(energy.sprite, energy.x, energy.y, energy.radius);
      else {
        GAME_energy.splice(i, 1);
        i--;
      }
    }
  } else {
    DRAW_AddQuad (TEXTURE_lose, DRAW_camera.x, DRAW_camera.y, gl.viewportWidth, gl.viewportHeight);

  }
  DRAW_Flush ();
}

function GAME_Update ()
{
  var timeNow, deltaTime;

  healthStats.firstChild.data = Math.floor((PLAYER_radius <= 1 ? 0 : PLAYER_radius));

  timeNow = new Date ().getTime ();
  deltaTime = (timeNow - lastTime) * 0.001;
  lastTime = timeNow;
  if (deltaTime < 0 || deltaTime > 0.033)
    deltaTime = 0.033;

  GAME_Draw (deltaTime);

  if (GAME_lose == false) {
    GAME_Move (deltaTime);

    //PLAYER_radius = Math.random() * 60;
    GAME_HandleCollision(deltaTime);

    for (var i = 0; i < GAME_energy.length; i++) {
      var energy = GAME_energy[i];
      if (energy.radius <= 1) {
        GAME_energy.splice(i, 1);
        i--;
      }
    }

    for (var i = 0; i < GAME_enemies.length; i++) {
      var enemy = GAME_enemies[i];
      if (enemy.radius <= 1) {
        GAME_enemies.splice(i, 1);
        i--;
      }
    }

    if (GAME_enemies.length < 20 && lastTime%8004)
      GAME_NewEnemy(deltaTime);

    if (GAME_energy.length < 10)
      GAME_NewEnergy();

    if (PLAYER_radius <= 1) 
      GAME_lose = true;
  }

  requestAnimFrame (GAME_Update);
}
