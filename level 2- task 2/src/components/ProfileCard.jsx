
import {
  MapPin,
  Building2,
  Users,
  BookOpen,
  ExternalLink,
  Link as LinkIcon,
} from "lucide-react";

function ProfileCard({ user }) {
  return (
    <section className="profile-card">
      <img
        src={user.avatar_url}
        alt={`${user.login}'s GitHub avatar`}
        className="profile-avatar"
      />

      <div className="profile-info">
        <h2>{user.name || user.login}</h2>
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="username"
        >
          @{user.login} <ExternalLink size={14} />
        </a>

        {user.bio && <p className="profile-bio">{user.bio}</p>}

        <div className="profile-details">
          {user.location && (
            <span><MapPin size={16} /> {user.location}</span>
          )}
          {user.company && (
            <span><Building2 size={16} /> {user.company}</span>
          )}
          {user.blog && (
            <a href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
              target="_blank" rel="noreferrer">
              <LinkIcon size={16} /> Website
            </a>
          )}
        </div>

        <div className="profile-stats">
          <div><Users size={19} /><strong>{user.followers}</strong> Followers</div>
          <div><Users size={19} /><strong>{user.following}</strong> Following</div>
          <div><BookOpen size={19} /><strong>{user.public_repos}</strong> Repositories</div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
