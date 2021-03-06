module Spree
  module Checkout
    class Complete
      prepend Spree::ServiceModule::Base

      def call(order:)
        Spree::Checkout::Next.call(order: order) until cannot_make_transition?(order)

        if order.reload.complete?
          success(order)
        else
          failure(order, order.errors.full_messages.join(', '))
        end
      end

      private

      def cannot_make_transition?(order)
        order.complete? || order.errors.present?
      end
    end
  end
end
