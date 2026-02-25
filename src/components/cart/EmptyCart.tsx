import { Typography } from "@/components/ui/Typography"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 gap-6">      
      <Typography variant="h2">
        Your cart is empty
      </Typography>

      <Typography variant="body" color="secondary">
        Looks like you haven’t added any books yet.
      </Typography>

      <Button asChild size="xl">
        <Link to="/">
          Continue shopping
        </Link>
      </Button>
    </div>
  )
}