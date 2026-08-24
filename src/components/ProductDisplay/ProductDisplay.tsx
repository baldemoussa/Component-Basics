import type { ProductDisplayProps } from "../../types/index.ts";

export function ProductDisplay({product, showDescription, showStockStatus, onAddToCart, children}: ProductDisplayProps) {
    return (
        <div className="rounded-lg shadow-md overflow-hidden ">
            <div className="w-full h-40 bg-gray-100">
                <img 
                    src={product.imageUrl || 'https://placehold.co/800x400?text=Product+Image'} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>          
            <div className="p-1 flex flex-col items-center text-center">
                <h2 className="text-xl font-medium text-gray-900">{product.name}</h2>
                <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                {showDescription && (
                    <p className="text-gray-500">
                        {product.description}
                    </p>)
                }
                {showStockStatus && (                  
                    <div>
                        {product.inStock ? (
                            <span className="text-green-500 text-base">In Stock</span>
                        ) : (
                            <span className="text-red-500 text-base">Out of Stock</span>
                        )}
                    </div>
                    )
                }
                {children && (
                    <div className="w-full">
                        {children}
                    </div>
                )}
                {onAddToCart && (
                    <button
                        onClick={() => onAddToCart(product.id)}
                        disabled={!product.inStock}
                        className={`w-full mt-4 py-3 px-4 rounded text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            product.inStock 
                                ? 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500' 
                                : 'bg-gray-400 cursor-not-allowed'
                        }`}
                    >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                )}
            </div>
        </div>
    );
}
