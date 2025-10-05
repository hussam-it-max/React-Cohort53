import { Heart, Home, ShoppingCart, Loader2, XCircle } from 'lucide-react';

export default function Alert({ message, type = 'error' }) {
    const bgColor = type === 'error' ? 'bg-red-100 border-red-400 text-red-700' : 'bg-blue-100 border-blue-400 text-blue-700';
    const Icon = type === 'error' ? XCircle : Home; 

    return (
        <div className={`p-4 mt-4 border rounded-lg flex items-center shadow-md ${bgColor}`} role="alert">
            <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
            <p className="font-medium">{message}</p>
        </div>
    );
}