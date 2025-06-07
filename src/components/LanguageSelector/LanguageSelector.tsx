import { CaretDownIcon, CheckIcon } from '@phosphor-icons/react';
import clsx from 'clsx';
import styles from './LanguageSelector.module.css';
import { useEffect, useRef, useState } from 'react';

export interface Option {
	value: string
	label: string
	icon?: React.ReactNode
}

interface CustomSelectProps {
	options: Option[]
	value?: string
	onChange?: (value: string) => void
	placeholder?: string
	className?: string
	ariaLabel?: string
}

export function LanguageSelector({
	options,
	value,
	onChange,
	placeholder = "Select a language",
	className,
}: CustomSelectProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedValue, setSelectedValue] = useState(value)
	const selectRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setSelectedValue(value)
	}, [value])

	const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		setIsOpen((prev: boolean) => !prev)
	}

	const handleSelectOption = (optionValue: string) => {
		setSelectedValue(optionValue)
		if (onChange) {
			onChange(optionValue)
		}
		setIsOpen(false)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	const selectedOption = options.find((option) => option.value === selectedValue)

	return (
		<div className={clsx("relative w-full", styles.customSelect, className)} ref={selectRef}>
			<button
				type="button"
				aria-haspopup="listbox"
				aria-expanded={isOpen}
				onClick={handleToggle}
				className={clsx(styles.dropdownButton, className)}
			>
				<span className="flex items-center">
					{selectedOption ? selectedOption.label : placeholder}
				</span>
				<CaretDownIcon
					className={clsx(styles.dropdownButtonCaret, { "rotate-180": isOpen })}
				/>
			</button>
			{isOpen && (
				<ul
					role="listbox"
					className={styles.dropdownList}
				>
					{options.map((option, index) => (
						<li
							key={option.value}
							role="option"
							aria-selected={option.value === selectedValue}
							onClick={() => handleSelectOption(option.value)}
							className={styles.dropdownListItem}
						>
							<div className='flex flex-col'>
								<div className='flex flex-row items-center justify-between py-[3px]'>
									<span className="flex items-center justify-start gap-[5px]">
										{option.icon && <span className="mr-2">{option.icon}</span>}
										{option.label}
									</span>
									{option.value === selectedValue && (
										<CheckIcon size={14} aria-hidden="true" />
									)}
								</div>
								{index < options.length - 1 && (
									<span className="border-b border-border" />
								)}
							</div>

						</li>
					))}
				</ul>
			)}
		</div>
	)
}