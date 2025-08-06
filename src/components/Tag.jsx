import Typography from "@/components/Typography.jsx";

export default function Tag({ children }) {
    return (
        <div className="flex justify-center">
            <h1 className="px-5 py-1 rounded-xl bg-gray-200 dark:bg-graydark-200">
                <Typography tag="span" variant="body3" className="text-gray-600 dark:text-graydark-600">
                    {children}
                </Typography>
            </h1>
        </div>
    )
}