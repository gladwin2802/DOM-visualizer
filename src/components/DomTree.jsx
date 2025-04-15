// components/DomTree.jsx (react-d3-tree version)
import Tree from 'react-d3-tree';
function convertToD3Tree(node) {
  const d3Node = {
    name: node.tag,
  };

  if (node.text) {
    d3Node.children = [{ name: `"${node.text}"` }];
  }

  if (node.children.length > 0) {
    d3Node.children = node.children.map(convertToD3Tree);
  }

  return d3Node;
}

export default function DomTree({ tree }) {
  if (!tree) return <p className="text-gray-500 text-center">Enter HTML to visualize.</p>;
  const data = convertToD3Tree(tree);
  return (
    <div className="h-[600px] border mt-4">
      <Tree data={data} orientation="vertical" />
    </div>
  );
}

