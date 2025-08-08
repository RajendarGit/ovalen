import { Icon } from '@iconify/react';

const FunctionButtons = () => {
  return (
    <div className="flex space-x-4 text-white">
      <button>
        <Icon icon="mdi:search" width="20" height="20" />
      </button>
      <button>
        <Icon icon="mdi:shopping-outline" width="20" height="20" />
      </button>
      <button>
        <Icon icon="mdi:user-outline" width="20" height="20" />
      </button>
    </div>
  );
}

export default FunctionButtons