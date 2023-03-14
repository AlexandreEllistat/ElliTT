const GRYPHONS = [
  { name: "Balthazar", id: 0, strength: 90 },
  { name: "Melchior", id: 1, strength: 41 },
  { name: "Anchor", id: 2, strength: 74 },
  { name: "Bob", id: 3, strength: 22 },
  { name: "Roger", id: 4, strength: 88 },
];

const getGryphons = async (req, res, next) => {
  try {
    return res.send(GRYPHONS);
  } catch (e) {
    next(e);
  }
};

const getGryphon = async (req, res, next) => {
  try {
    let { id } = req.params;
    return res.send(getGryphonById(id));
  } catch (e) {
    next(e);
  }
};

const postGryphon = async (req, res, next) => {
  try {
    let gryphon = req.body;
    //Rajouter le post
    return res.status(501).send("Not implemented yet!");
  } catch (e) {
    next(e);
  }
};

const patchGryphon = async (req, res, next) => {
  try {
    return res.status(501).send("Not implemented yet!");
  } catch (e) {
    next(e);
  }
};

// ==============
// UTILS FUNCTION
// ==============

getGryphonById = (id) => {
  return GRYPHONS.find((x) => x.id == id);
};

exports.getGryphons = getGryphons;
exports.getGryphon = getGryphon;
exports.patchGryphon = patchGryphon;
exports.postGryphon = postGryphon;
