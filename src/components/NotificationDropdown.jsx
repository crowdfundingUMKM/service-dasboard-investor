import Link from 'next/link';

export default function NotificationDropdown() {

    return (
        <li className="nav-item dropdown">
            <div className="nav-link nav-icon" href="#" data-bs-toggle="dropdown" data-bs-target="#notificationDropdown">
                <i className="bi bi-chat-left-text" />
                <span className="badge bg-success badge-number">3</span>
            </div>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages" id="#notificationDropdown">
                <li className="dropdown-header">
                    You have 3 new messages
                    <Link href="/notif/notif-admin">
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            View all
                        </span>
                    </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                
                <li className="notification-item">
                    <i className="bi bi-x-circle text-danger" />
                    <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                    </div>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                    <i className="bi bi-check-circle text-success" />
                    <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                    </div>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                    <i className="bi bi-info-circle text-primary" />
                    <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                    </div>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                    <Link href="/notif/notif-admin">Show all notifications</Link>
                </li>
            </ul>
        </li>
    );
}
