import { Icon } from '@iconify/react';

const FunctionButtons = () => {
  return (
    <div className="flex space-x-4">
      <button>
        <Icon icon="mdi:search" width="24" height="24" />
      </button>
      <button>
        <Icon icon="mdi:shopping-outline" width="24" height="24" />
      </button>
      <button>
        <Icon icon="mdi:user-outline" width="24" height="24" />
      </button>
    </div>
  );
}

export default FunctionButtons