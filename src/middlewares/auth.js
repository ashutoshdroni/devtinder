adminAuth= (req, res,next) => {
  console.log("Admin access attempted.");
  const token = "xyzzz"; // hardcoded for now
  const isAdminAuthorized = token === "xyzzz";

  if (!isAdminAuthorized) {
    res.send("authorized Access");
  } else {
    next();
  }  
  }; 
  module.exports={adminAuth};