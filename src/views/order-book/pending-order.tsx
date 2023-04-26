type props = {
  onSubmit : () => void
}

function PendingOrder({
  onSubmit
} : props) {
  return (
    <div
    ref={() => {
      setTimeout(() => {
        onSubmit()
      }, 2000);
    }}
    className="
    flex-shrink
    w-full
    relative
    flex
    flex-col
    text-primary-dark
    overflow-hidden
    pb-6
    ">
        <h3
        className="
        text-[14px]
        font-medium
        mb-2
        ">
            برسی کتاب توسط تیم کتابچه
        </h3>

        <p
        className="
        text-[14px]
        ">
        کتاب شما در حال برسی توسط تیم کتابچه میباشد و پس از تایید و برسی کتاب تهیه و در فروشگاه موجود میشود . 
        شما میتوانید ادامه فرایند را از همین صفحه پیگیری کنید .
        </p>
    </div>
  )
}

export default PendingOrder