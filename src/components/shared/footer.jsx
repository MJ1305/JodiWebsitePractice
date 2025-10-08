export default function Footer() {
    return (
      <div className="mt-[6rem]">
        <div className="text-white p-[1rem] bg-slate-800">
            <div className="flex justify-between">
                <span>
                    <h2>CONTENT</h2>
                    <ul>
                        <li>Calendar of festivities</li>
                        <li>New assets</li>
                        <li>The more popular content</li>
                        <li>Search trends</li>
                        <li>Blog</li>
                    </ul>
                </span>
                <span>
                    <h2>INFORMATION</h2>
                    <ul>
                        <li>About us</li>
                        <li>Api</li>
                        <li>Jobs</li>
                        <li>Sell your content</li>
                        <li>Press room</li>
                    </ul>
                </span>
                <span>
                    <h2>LEGAL</h2>
                    <ul>
                        <li>Term of use</li>
                        <li>License agreement</li>
                        <li>Privacy policy</li>
                        <li>Copyright information</li>
                        <li>Cookies policy</li>
                        <li>Cookies settings</li>
                    </ul>
                </span>
                <span>
                    <h2>SOCIALMEDIA</h2>
                    <div className="pb-[1rem]">
                        Facebook 
                        Twitter
                        Pintreast
                        Instagram
                        Youtube
                        Linkedin
                    </div>
                    <div className="w-[10rem]">
                        <p>Get exclusive assets sent straight to your inbox</p>                        
                    </div>                
                </span>
            </div>      
            <div className="flex justify-between px-[3rem]">
                <p>LOGO</p>
                <p>Copyright ©  2010-2023 JODI Company S.L. All rights reserved.</p>
            </div>      
        </div>
      </div>
    );
}