const OrderCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id,title, image, price, deleteOrder } = props;
  let renderSvg 
  if (deleteOrder) {
  renderSvg=    <div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4 cursor-pointer"
    onClick={()=>deleteOrder(id)}
  >
    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
  </svg>
</div>
  }

  return (
    <div className="flex justify-between items-center mb-3 ">
      <div className="flex items-center gap-2 ">
        <figure className="w-20 h-16">
          <img
            className="w-full h-full rounded-lg object-cover shadow-xl border border-gray-300"
            src={image}
            alt={title}
          />
        </figure>
          <p className="text-sm font-light truncate max-w-[63px]">{title}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-lg font-medium">${price}</p>
        {renderSvg}
      </div>
    </div>
  );
};

export default OrderCard;
