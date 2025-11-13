export default function Footer() {
    return (
      <div className="mt-24">
        <div className="text-white p-4 sm:p-6 bg-slate-800">
            
            {/* Top Section: Links */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0">
                
                <span>
                    <h2 className="font-bold text-lg sm:text-xl">CONTENT</h2>
                    <ul className="text-sm sm:text-base space-y-1 mt-2">
                        <li>Calendar of festivities</li>
                        <li>New assets</li>
                        <li>The more popular content</li>
                        <li>Search trends</li>
                        <li>Blog</li>
                    </ul>
                </span>
                
                <span>
                    <h2 className="font-bold text-lg sm:text-xl">INFORMATION</h2>
                    <ul className="text-sm sm:text-base space-y-1 mt-2">
                        <li>About us</li>
                        <li>Api</li>
                        <li>Jobs</li>
                        <li>Sell your content</li>
                        <li>Press room</li>
                    </ul>
                </span>
                
                <span>
                    <h2 className="font-bold text-lg sm:text-xl">LEGAL</h2>
                    <ul className="text-sm sm:text-base space-y-1 mt-2">
                        <li>Term of use</li>
                        <li>License agreement</li>
                        <li>Privacy policy</li>
                        <li>Copyright information</li>
                        <li>Cookies policy</li>
                        <li>Cookies settings</li>
                    </ul>
                </span>
                
                <span>
                    <h2 className="font-bold text-lg sm:text-xl">SOCIAL MEDIA</h2>
                    <div className="flex flex-col gap-1 mt-2 text-sm sm:text-base">
                        <span>Facebook</span>
                        <span>Twitter</span>
                        <span>Pinterest</span>
                        <span>Instagram</span>
                        <span>Youtube</span>
                        <span>Linkedin</span>
                    </div>
                    <div className="mt-4 sm:mt-6 max-w-xs text-sm sm:text-base">
                        <p>Get exclusive assets sent straight to your inbox</p>                        
                    </div>                
                </span>

            </div>      

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 px-2 sm:px-6 text-sm sm:text-base gap-2 sm:gap-0">
                <p>LOGO</p>
                <p>Copyright © 2010-2023 JODI Company S.L. All rights reserved.</p>
            </div>      
        </div>
      </div>
    );
}
