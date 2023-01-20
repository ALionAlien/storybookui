import "./avatar.css";
import userFallback from "./user.svg";
import { useState } from "react";

export function Avatar({ src, alt, fallback = userFallback, bg, size, circle }) {
    const [hasError, setHasError] = useState(false);

    return (
        <div className="avatar-root" style={{ width: size, height: size }}>
            <img
                className="avatar-image"
                onError={() => setHasError(true)}
                src={hasError ? fallback : src}
                alt={alt}
                style={{ background: bg, borderRadius: circle ? "50%" : "0" }}
            />
        </div>
    );
}

function AvatarGroup({ children }) {
    return <div className="avatar-group">{children}</div>;
}

Avatar.Group = AvatarGroup;
