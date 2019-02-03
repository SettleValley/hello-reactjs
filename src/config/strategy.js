//Documentation about this strategy //github.com/jaredhanson/passport-instagram/blob/master/examples/login/app.js
//dependecies
import passport from'passport';
import Instagram from 'passport-instagram';

const INSTAGRAM_CLIENT_ID = 'fdc32530e75d4b6fbd539d21d4780955';
const INSTAGRAM_CLIENT_SECRET = '4744e50b3ba14f26a904c90644dde309';

export function instagram(){
  const InstagramStrategy = Instagram.Strategy; 

  passport.use(new InstagramStrategy({
    clientID: INSTAGRAM_CLIENT_ID,
      clientSecret: INSTAGRAM_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/instagram/callback"
  }, (accessToken, refreshToken, profile, done) => {
      let user = {};
      user.name = profile.displayName;
      user.homePage = profile._json.data.website;
      user.image = profile._json.data.profile_picture;
      user.bio = profile._json.data.bio;
      user.media = `https://api.instagram.com/v1/users/${profile.id}/media/recent/?access_token=${accessToken}&count=8`
      done(null, user)  
  }))
}