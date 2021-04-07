const presentation =
  "Computer and\nvideo games\nenthusiast since\nmy childhood and\nam currently\na computer\ndevelopment\nstudent In order\nto enhance\nmy programming \nskills and\nconsolidate my\nfield of expertise\nso that I will\nbe ready for\nthe video game\n development";
const programming_skills = "python\ngolang\njavascript\nHTML/CSS\nBASH\nmySQL";
const ascii_art_web =
  "Manipulating the ASCII ART Using a website\nand creating a form in this website\nwith which we can choose the font\nand the color and other options";
const challenge_project =
  "this year the goal was to create a site\nand connect it to a database so the user\ncan fill the form to upload images into\nhis account and to be able to look for\nthis image later and download it\nor change its caracteristics";
const backup =
  "the goal of this projet is to create\na script which will store to the\nselected files in a distant machine to\nbe used as backup later in case\nof some loss in the current machine";
const cv_zelda =
  "as you ve already guessed\nthis is the project you are\ncurrently lookin at.It was\na bit harder than others\nfor a first time to make a\nvideo game like project\nbut it was fun to make";
const languages = "Arabic\nEnglish\nGerman";
const Interests = "GAMING\nMOVIES\nPROGRAMMING\nMUSIC";
function loadFont(name, url) {
  const newFont = new FontFace(name, `url(${url})`);
  newFont
    .load()
    .then(function (loaded) {
      document.fonts.add(loaded);
    })
    .catch(function (error) {
      return error;
    });
}

loadFont("CustomFont", "assets/Custom-fonts/TROGN___.ttf");
loadFont("ProgrammingFont", "assets/Custom-fonts/heavy_data.ttf");
loadFont("SignFont", "assets/Custom-fonts/slkscreb.ttf");
loadFont("Experience", "assets/Custom-fonts/Lemiesz.ttf");
const style = {
  fontSize: "28px",
  fill: "blue",
  fontFamily: "CustomFont",
  lineSpacing: 19,
  align: "left",
  boundsAlignH: "left",
  boundsAlignV: "top",
  wordWrap: true,
  wordWrapWidth: 300,
};
const style_skills = {
  fontSize: "30px",
  fill: "red",
  fontFamily: "ProgrammingFont",
  lineSpacing: 23,
  align: "left",
  boundsAlignH: "left",
  boundsAlignV: "top",
  wordWrap: true,
  wordWrapWidth: 300,
};
const style_interest_language = {
  fontSize: "50px",
  fill: "Blue",
  fontFamily: "ProgrammingFont",
  lineSpacing: 50,
  align: "left",
  boundsAlignH: "left",
  boundsAlignV: "top",
  wordWrap: true,
  wordWrapWidth: 300,
};
const style_sign = {
  fontSize: "35px",
  fill: "midnightblue",
  fontFamily: "SignFont",
  align: "left",
  boundsAlignH: "left",
  boundsAlignV: "top",
  wordWrap: true,
  wordWrapWidth: 300,
};
const style_experience = {
  fontSize: "25px",
  fill: "red",
  fontFamily: "CustomFont",
  align: "left",
  boundsAlignH: "left",
  boundsAlignV: "top",
  wordWrap: true,
  wordWrapWidth: 300,
};

const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }, // Top down game, so no gravity
    },
  },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.tilemapTiledJSON("map", "./assets/MAP_ZELDA.json");
  this.load.image("tiles", "./assets/img/Overworld.png");
  this.load.image("textile", "./assets/img/font.png");
  this.load.image("icontile", "./assets/img/objects.png");
  this.load.spritesheet("link", "./assets/img/link-spritesheet.png", {
    frameWidth: 24,
    frameHeight: 32,
  });
}

function create() {
  const map = this.make.tilemap({ key: "map" });
  const tileset = map.addTilesetImage("ZELDA OUTSIDE", "tiles");
  const tilefont = map.addTilesetImage("FONT", "textile");
  const tileicons = map.addTilesetImage("Objects", "icontile");

  // Parameters: layer name (or index) from Tiled, tileset, x, y

  const belowLayer = map.createStaticLayer("Below Player", tileset, 0, 0);
  const textLayer = map.createStaticLayer("TEXT", tilefont, 0, 0);
  const icons = map.createStaticLayer("Icons", tileicons, 0, 0);
  const worldLayer = map.createStaticLayer("World", tileset, 0, 0);
  const aboveLayer = map.createStaticLayer("Above Player", tileset, 0, 0);
  worldLayer.setCollisionByProperty({ collides: true });
  // Object layers in Tiled let you embed extra info into a map - like a spawn point or custom
  // collision shapes. In the tmx file, there's an object layer with a point named "Spawn Point"
  const spawnPoint = map.findObject(
    "Objects",
    (obj) => obj.name === "Spawn Point"
  );

  this.add.text(1749, 547, presentation, style);
  this.add.text(487, 2055, programming_skills, style_skills);
  this.add.text(1638, 2050, Interests, style_interest_language);
  this.add.text(2525, 2187, languages, style_interest_language);
  //signs
  this.add.text(1430, 1820, "<= SKILLS", style_sign);
  this.add.text(1855, 1800, "EXPERIENCE =>", style_sign);
  this.add.text(3630, 1423, "SUDOKU", style_sign);
  this.add.text(3027, 990, "ASCII\nART\nWEB", style_sign);
  this.add.text(3577, 962, "ASCII\nART", style_sign);
  this.add.text(3560, 580, "CHALLENGE\n48H", style_sign);
  this.add.text(2950, 665, "<= The Project", style_sign);
  this.add.text(3572, 204, "Backup/\nSave", style_sign);
  this.add.text(3550, 24, "<= ZELDA RESUME", style_sign);
  this.add.text(2120, 2315, "LANGUAGES =>", style_sign);
  this.add.text(875, 2652, "Interest =>", style_sign);
  this.add.text(1640, 2607, "Skills", style_sign);
  this.add.text(1698, 1869, "Interests", style_sign);
  this.add.text(3110, 2280, "EXPERIENCE", style_sign);
  //experience
  this.add.text(3314, 1373, "Solving a Sudoku\nGrid", style_experience);
  this.add.text(3201, 993, "TRANSFORM", style_experience);
  this.add.text(3210, 1050, "this", { fontSize: "20px", fill: "black" });
  this.add.text(3204, 1208, "this", style);
  this.add.text(2225, 1015, ascii_art_web, style_experience);
  this.add.text(
    3030,
    555,
    "this is a project given by\na real client and needs to be\ndone before 48H",
    style_experience
  );
  this.add.text(2229, 576, challenge_project, style_experience);
  this.add.text(2869, 195, backup, style_experience);
  this.add.text(2181, 36, cv_zelda, style_experience);

  player = this.physics.add
    .sprite(spawnPoint.x, spawnPoint.y, "link")
    .setScale(1.3)
    .setSize(15, 20)
    .setOffset(3, 5);

  // Watch the player and worldLayer for collisions, for the duration of the scene:
  this.physics.add.collider(player, worldLayer);

  // Create the player's walking animations from the texture atlas. These are stored in the global

  const anims = this.anims;
  anims.create({
    key: "misa-right",
    frames: anims.generateFrameNames("link", { start: 30, end: 30 }),
    frameRate: 30,
    repeat: -1,
  });
  anims.create({
    key: "misa-left",
    frames: anims.generateFrameNames("link", { start: 0, end: 0 }),
    frameRate: 30,
    repeat: -1,
  });
  anims.create({
    key: "misa-front",
    frames: anims.generateFrameNames("link", { start: 41, end: 41 }),
    frameRate: 30,
    repeat: -1,
  });
  anims.create({
    key: "misa-back",
    frames: anims.generateFrameNames("link", { start: 15, end: 15 }),
    frameRate: 30,
    repeat: 0,
  });
  anims.create({
    key: "misa-right-walk",
    frames: anims.generateFrameNames("link", { start: 11, end: 0 }),
    frameRate: 30,
    repeat: -1,
  });
  anims.create({
    key: "misa-left-walk",
    frames: anims.generateFrameNames("link", { start: 35, end: 24 }),
    frameRate: 30,
    repeat: -1,
  });
  anims.create({
    key: "misa-back-walk",
    frames: anims.generateFrameNames("link", { start: 36, end: 47 }),
    frameRate: 30,
    repeat: -1,
  });
  anims.create({
    key: "misa-front-walk",
    frames: anims.generateFrameNames("link", { start: 12, end: 23 }),
    frameRate: 30,
    repeat: -1,
  });

  const camera = this.cameras.main;
  camera.startFollow(player);
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  const speed = 300;
  const prevVelocity = player.body.velocity.clone();

  // Stop any previous movement from the last frame
  player.body.setVelocity(0);

  // Horizontal movement
  if (cursors.left.isDown) {
    player.body.setVelocityX(-speed);
  } else if (cursors.right.isDown) {
    player.body.setVelocityX(speed);
  }

  // Vertical movement
  if (cursors.up.isDown) {
    player.body.setVelocityY(-speed);
  } else if (cursors.down.isDown) {
    player.body.setVelocityY(speed);
  }

  // Normalize and scale the velocity so that player can't move faster along a diagonal
  player.body.velocity.normalize().scale(speed);

  // Update the animation last and give left/right animations precedence over up/down animations
  if (cursors.left.isDown) {
    player.anims.play("misa-left-walk", true);
  } else if (cursors.right.isDown) {
    player.anims.play("misa-right-walk", true);
  } else if (cursors.up.isDown) {
    player.anims.play("misa-back-walk", true);
  } else if (cursors.down.isDown) {
    player.anims.play("misa-front-walk", true);
  } else {
    player.anims.stop();

    // // If we were moving, pick and idle frame to use
    if (prevVelocity.x < 0) player.anims.play("misa-right", true);
    else if (prevVelocity.x > 0) player.anims.play("misa-left", true);
    else if (prevVelocity.y < 0) player.anims.play("misa-front", true);
    else if (prevVelocity.y > 0) player.anims.play("misa-back", true);
  }
}
function change_to_skills() {
  player.x = 760;
  player.y = 1865;
}
function change_to_presentation() {
  player.x = 1595;
  player.y = 498;
}
function change_to_exp() {
  player.x = 3854;
  player.y = 1574;
}
function change_to_int() {
  player.x = 1851;
  player.y = 1982;
}
function change_to_lang() {
  player.x = 2376;
  player.y = 2320;
}
