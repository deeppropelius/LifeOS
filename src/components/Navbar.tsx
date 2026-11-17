
import {
    LayoutDashboard,
    CalendarRange,
    ListCheck,
    StickyNotes,
    Settings,
} from "lucide-react";

const iconProps = {
    strokeWidth: 1.5,
    size: 23,
};

function Navbar() {
    return (
        <div className="
      absolute
      bottom-6
     
      z-10
      text-white
    ">
            <div className="
        opacity-40
        flex
        items-center
        gap-5
      ">
                <div className="flex items-center gap-5">
                    <LayoutDashboard
                        {...iconProps}
                        className="nav-icon"
                    />
                    <CalendarRange
                        {...iconProps}
                        className="nav-icon"
                    />
                    <ListCheck
                        {...iconProps}
                        className="nav-icon"
                    />
                    <StickyNotes
                        {...iconProps}
                        className="nav-icon"
                    />
                    <Settings
                        {...iconProps}
                        className="nav-icon"
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
