//= require bootstrap-sprockets
//= require jquery.payment
//= require spree
//= require spree/frontend/api_tokens
//= require spree/frontend/cart
//= require spree/frontend/checkout
//= require spree/frontend/checkout/address
//= require spree/frontend/checkout/payment
//= require spree/frontend/product

Spree.routes.api_tokens = Spree.pathFor('api_tokens')
Spree.routes.api_v2_storefront_cart_apply_coupon_code = Spree.pathFor('api/v2/storefront/cart/apply_coupon_code')
