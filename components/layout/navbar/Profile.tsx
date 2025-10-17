import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const Profile = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-[30rem] flex flex-col gap-5 justify-between text-muted-foreground">
        <DialogHeader>
          <DialogTitle className="pb-3">Profile Details</DialogTitle>
          <Separator />
          <div className="py-2">
            <span className="flex justify-between gap-5">
              <span>Name :</span>
              <span>User 1</span>
            </span>
          </div>
          <Separator />
          <div className="py-2">
            <span className="flex gap-5 justify-between">
              <span>Email Address:</span>
              <span>user@gmail.com</span>
            </span>
          </div>
          <Separator />
          <div className="flex justify-between items-center py-2">
            <span>Theme :</span>
            <ModeToggle />
          </div>
          <Separator />
          <div className="flex justify-between items-center py-2">
            <p>Language :</p>
            <LocaleSwitcher />
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button className="cursor-pointer">Update Profile</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Profile;
