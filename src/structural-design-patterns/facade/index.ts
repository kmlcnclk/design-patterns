// InventorySystem.ts
class InventorySystem {
    checkStock(productId: string): boolean {
        console.log(`Checking stock for product: ${productId}`);
        // Stok kontrolü yapılıyormuş gibi varsayalım
        return true;
    }
}

// PaymentSystem.ts
class PaymentSystem {
    processPayment(productId: string): void {
        console.log(`Processing payment for product: ${productId}`);
        // Ödeme işleniyormuş gibi varsayalım
    }
}

// ShippingSystem.ts
class ShippingSystem {
    arrangeShipment(productId: string): void {
        console.log(`Arranging shipment for product: ${productId}`);
        // Kargo düzenleniyormuş gibi varsayalım
    }
}

// ECommerceFacade.ts
class ECommerceFacade {
    private inventory: InventorySystem;
    private payment: PaymentSystem;
    private shipping: ShippingSystem;

    constructor() {
        this.inventory = new InventorySystem();
        this.payment = new PaymentSystem();
        this.shipping = new ShippingSystem();
    }

    placeOrder(productId: string): void {
        if (this.inventory.checkStock(productId)) {
            this.payment.processPayment(productId);
            this.shipping.arrangeShipment(productId);
        } else {
            console.log(`Product ${productId} is out of stock.`);
        }
    }
}

// Kullanım
const ecommerce = new ECommerceFacade();
ecommerce.placeOrder('product123');
