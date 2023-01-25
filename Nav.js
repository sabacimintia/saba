function Nav(){

    return<div className="nav1">
        {
            <img src="logo2.png" className="img"></img>
        }
        { <div className="img5">
        {
            <div className='shpic'>
            <img src="shpic.png" ></img>
            </div>

        }
            {
                <div className='fav'>
            <img src="fav.jpg"></img>
            </div>

        }
            {
                <div className='profile'>
            <img src="profile.png"  id="profile1" ></img>
            </div>

        }
        </div>
    }
{
    <hr></hr>
}
    
      {  <nav>
            <div className="nav1">
            <ul>
                <li><a href="#">მთავარი</a></li>
                <li><a href="#">ქალი</a></li>
                <li><a href="#">მამაკაცი</a></li>
                <li><a href="#">ბავშვი</a></li>
                <li><a href="#">კონტაქტი</a></li>

            </ul>
                </div>     
                
        </nav>
      }
      </div>
}
export default Nav;