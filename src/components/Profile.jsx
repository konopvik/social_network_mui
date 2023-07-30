import React from "react";
import styles from "./Profile.module.css"


const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className="posts">
          <div className={styles.item}>post 1</div>
          <div className="item">post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
