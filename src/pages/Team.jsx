import { Mail, Phone, MoreVertical } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Product Manager',
      email: 'john@collabx.com',
      phone: '+1 234 567 8900',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      status: 'online',
      tasksCompleted: 24
    },
    {
      id: 2,
      name: 'Sarah Smith',
      role: 'Lead Developer',
      email: 'sarah@collabx.com',
      phone: '+1 234 567 8901',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      status: 'online',
      tasksCompleted: 31
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'UI/UX Designer',
      email: 'mike@collabx.com',
      phone: '+1 234 567 8902',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      status: 'away',
      tasksCompleted: 18
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Backend Developer',
      email: 'emily@collabx.com',
      phone: '+1 234 567 8903',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      status: 'online',
      tasksCompleted: 27
    },
    {
      id: 5,
      name: 'Alex Brown',
      role: 'QA Engineer',
      email: 'alex@collabx.com',
      phone: '+1 234 567 8904',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      status: 'offline',
      tasksCompleted: 15
    },
    {
      id: 6,
      name: 'Lisa Wilson',
      role: 'DevOps Engineer',
      email: 'lisa@collabx.com',
      phone: '+1 234 567 8905',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      status: 'online',
      tasksCompleted: 22
    }
  ];

  const statusColors = {
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    offline: 'bg-gray-400'
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Team Members</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your team and their roles</p>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Total Members</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{teamMembers.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Online</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">
            {teamMembers.filter(m => m.status === 'online').length}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Away</h3>
          <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
            {teamMembers.filter(m => m.status === 'away').length}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Offline</h3>
          <p className="text-3xl font-bold text-gray-600 dark:text-gray-400">
            {teamMembers.filter(m => m.status === 'offline').length}
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="relative">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full"
                />
                <span
                  className={`absolute bottom-0 right-0 w-4 h-4 ${statusColors[member.status]} rounded-full border-2 border-white dark:border-gray-800`}
                />
              </div>
              <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4" />
                <span>{member.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4" />
                <span>{member.phone}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Tasks Completed</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {member.tasksCompleted}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;