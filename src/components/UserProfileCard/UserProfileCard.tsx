import type { UserProfileCardProps } from "../../types/index.ts";

export function UserProfileCard({ user, showEmail, showRole, onEdit, children }: UserProfileCardProps) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto">
            <div className="flex items-center mb-6">
                <img
                    src={user.avatarUrl || 'https://cdn3.iconfinder.com/data/icons/web-design-and-development-2-6/512/87-1024.png'}
                    alt={user.name}
                    className="w-24 h-24 rounded-full object-cover bg-gray-100"
                />
                <div className="flex-1 flex flex-col items-center justify-center ml-4">
                    <h2 className="text-2xl font-medium text-gray-900">{user.name}</h2>
                    {showEmail && <p className="text-gray-500 text-sm mt-2">{user.email}</p>}
                    {showRole && <p className="text-gray-500 text-sm mt-2">{user.role}</p>}
                </div>
            </div>
            
            {children && (
                <div className="mb-6 text-center">
                    {children}
                </div>
            )}

            {onEdit && (
                <button
                    onClick={() => onEdit(user.id)}
                    className="w-full py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    Edit Profile
                </button>
            )}
        </div>
    )

}
