import React, { useState } from "react";
import {
  VscFolder,
  VscFolderOpened,
  VscFile,
  VscChevronRight,
  VscChevronDown,
  VscFilePdf,
} from "react-icons/vsc";
import "./FileTree.css";

// Fix for TS2786: 'Icon' cannot be used as a JSX component.
const IconFolder = VscFolder as React.ElementType;
const IconFolderOpened = VscFolderOpened as React.ElementType;
const IconFile = VscFile as React.ElementType;
const IconChevronRight = VscChevronRight as React.ElementType;
const IconChevronDown = VscChevronDown as React.ElementType;
const IconFilePdf = VscFilePdf as React.ElementType;

interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
  id?: string;
  action?: () => void;
  isOpen?: boolean;
  icon?: React.ReactNode;
}

const FileTreeNode: React.FC<{ node: FileNode; depth: number }> = ({
  node,
  depth,
}) => {
  const [isOpen, setIsOpen] = useState(node.isOpen || false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (node.type === "folder") {
      setIsOpen(!isOpen);
    } else {
      if (node.action) {
        node.action();
      } else if (node.id) {
        const element = document.getElementById(node.id);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="file-tree-node">
      <div
        className={`file-tree-item ${
          node.type === "folder" ? "folder" : "file"
        }`}
        style={{ paddingLeft: `${depth * 12}px` }}
        onClick={handleClick}
      >
        <span className="icon-container">
          {node.type === "folder" ? (
            <span className="chevron">
              {isOpen ? <IconChevronDown /> : <IconChevronRight />}
            </span>
          ) : (
            <span className="chevron-spacer"></span>
          )}

          {node.icon ? (
            node.icon
          ) : node.type === "folder" ? (
            isOpen ? (
              <IconFolderOpened className="folder-icon open" />
            ) : (
              <IconFolder className="folder-icon" />
            )
          ) : (
            <IconFile className="file-icon" />
          )}
        </span>
        <span className="label">{node.name}</span>
      </div>
      {isOpen && node.children && (
        <div className="file-tree-children">
          {node.children.map((child, index) => (
            <FileTreeNode key={index} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const FileTree = () => {
  const treeData: FileNode[] = [
    {
      name: "Journey",
      type: "folder",
      isOpen: true,
      children: [
        { name: "Professional", type: "file", id: "journey" },
        { name: "Education", type: "file", id: "journey" },
      ],
    },
    {
      name: "Projects",
      type: "folder",
      isOpen: true,
      children: [
        { name: "web", type: "file", id: "webapps" },
        { name: "mobile", type: "file", id: "mobileapps" },
        { name: "cli", type: "file", id: "cliapps" },
      ],
    },
    { name: "Achievements", type: "file", id: "achievements" },
    { name: "Blogs", type: "file", id: "blogs" }, // Placeholder for now
    { name: "Contact", type: "file", id: "contact" },
    {
      name: "resume.pdf",
      type: "file",
      icon: <IconFilePdf className="file-icon" style={{ color: "#e57373" }} />,
      action: () => {
        window.open(
          process.env.PUBLIC_URL + "/vivek_v_pai_resume_ind.pdf",
          "_blank"
        );
      },
    },
  ];

  return (
    <div className="file-tree-container glass">
      <div className="file-tree-header">EXPLORER</div>
      <div className="file-tree-content">
        {treeData.map((node, index) => (
          <FileTreeNode key={index} node={node} depth={0} />
        ))}
      </div>
    </div>
  );
};

export default FileTree;
