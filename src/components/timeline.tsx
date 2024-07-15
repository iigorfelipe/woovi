export const Timeline = () => {
  const events = [
    {
      id: 1,
      content: {
        um: '1ª entrada no Pix',
        dois: 'R$ 15.300,00'
      },
      isActive: true,
    },
    {
      id: 2,
      content: {
        um: '2ª no cartão',
        dois: 'R$ 15.300,00'
      },
      isActive: false,
    }
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      {
        events.map((event, index) => (
          <div key={event.id} className="w-full flex items-center gap-2 relative">

            {
              index !== events.length - 1 && (
                <div className="h-[150%] border-l-2 border-gray-300 absolute mt-10 ml-[7px]" />
              )
            }

            <div className={`w-4 h-4 border-2 rounded-full bg-white z-10 ${
              event.isActive ? 'border-green-500' : 'border-gray-300'
            }`} />

            <time className="text-lg font-semibold leading-none text-[#4D4D4D]">
              {event.content.um}
            </time>

            <span className="ml-auto text-lg font-extrabold">
              {event.content.dois}
            </span>

          </div>
        ))
      }
    </div>
  );
};